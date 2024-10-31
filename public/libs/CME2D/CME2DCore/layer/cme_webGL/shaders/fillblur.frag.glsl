precision highp float;
varying vec2 vLatLngCoords;
uniform sampler2D uTexture;
uniform sampler2D uColorRamp;
uniform float u_min;
uniform float u_max;
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

float random(vec3 scale, float seed) {
    /* use the fragment position for a different seed per-pixel */
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

vec4 color_t(vec2 pos){
    vec4 texelColour = texture2D(uTexture,vec2(pos.x,1.0 - pos.y));
    // 数值大小
    float value = mix(u_min, u_max, texelColour.r);
    // 图例时比例
    float speed_t = smoothstep(ramp_min,ramp_max,value);
    // color ramp is encoded in a 16x16 texture
    // 根据速度占比
    vec2 ramp_pos = vec2(
        fract(16.0 * speed_t),
        floor(16.0 * speed_t) / 16.0);
    // 获取该点的颜色
    vec4 lengedColor =  texture2D(uColorRamp, ramp_pos);
    lengedColor = lengedColor * texelColour.b;
    // 返回颜色
    return lengedColor;
}

void main(void) {
    // 获取该位置的U、V
    vec2 pos = mercatorToWGS84(vLatLngCoords);
    vec4 color = color_t(pos);
    if (color.b > 0.0){
        float total = 0.0;
        float delta = 2.0/1024.0;
        vec2 texCoord = pos;
        /* randomize the lookup values to hide the fixed number of samples */
        float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
        for (float t = -30.0; t <= 30.0; t++) {
            float percent = (t + offset - 0.5) / 30.0;
            float weight = 1.0 - abs(percent);
            vec4 sample = color_t(texCoord + delta * percent);
            /* switch to pre-multiplied alpha to correctly blur transparent images */
            sample.rgb *= sample.a;
            color += sample * weight;
            total += weight;
        }
        gl_FragColor = color / total;
        /* switch back from pre-multiplied alpha */
        gl_FragColor.rgb /= gl_FragColor.a + 0.00001;

    }else {
        discard;
    }



    // gl_FragColor = color_t(pos);
    

}