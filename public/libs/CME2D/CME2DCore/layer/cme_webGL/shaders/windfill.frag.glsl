precision highp float;
varying vec2 vLatLngCoords;
uniform sampler2D uTexture;
uniform sampler2D uColorRamp;
uniform vec2 u_wind_min;
uniform vec2 u_wind_max;
uniform float ramp_min;
uniform float ramp_max;

const float PI = 3.14159265359;
vec2 mercatorToWGS84(vec2 xy) {
    // convert lat into an angle
    float y = radians(180.0 - xy.y * 360.0);
    // use the formula to convert mercator -> WGS84
    y = 360.0 / PI  * atan(exp(y)) - 90.0;
    // normalize back into 0..1 interval
    y = y / -180.0 + 0.5;
    // pass lng through, as it doesn't change
    return vec2(mod(xy.x , 1.0), y);
}


void main(void) {
    // 获取该位置的U、V
    vec2 pos = mercatorToWGS84(vLatLngCoords);
    vec4 texelColour = texture2D(uTexture,vec2(pos.x,1.0 - pos.y));
    if (texelColour.b > 0.0){
        vec2 velocity = mix(u_wind_min, u_wind_max, texelColour.rg);
        // 计算粒子真实速度
        // float speed_t = length(velocity) / length(u_wind_max);
        float speed_t = smoothstep(ramp_min,ramp_max,length(velocity));
        // color ramp is encoded in a 16x16 texture
        // 根据速度占比
        vec2 ramp_pos = vec2(
            fract(16.0 * speed_t),
            floor(16.0 * speed_t) / 16.0);
        // 获取该点的颜色
        vec4 lengedColor =  texture2D(uColorRamp, ramp_pos);
        gl_FragColor = lengedColor * texelColour.b;
    }else {
        discard;
    }
    

}