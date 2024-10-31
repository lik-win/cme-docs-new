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
    float y = radians(180.0 - xy.y * 360.0);
    y = 360.0 / PI * atan(exp(y)) - 90.0;
    y = y / -180.0 + 0.5;
    return vec2(mod(xy.x, 1.0), y);
}

void main(void) {
    vec2 pos = mercatorToWGS84(vLatLngCoords);
    vec4 texelColour = texture2D(uTexture, vec2(pos.x, 1.0 - pos.y));
    if(texelColour.b > 0.0) {
        vec2 velocity = mix(u_wind_min, u_wind_max, texelColour.rg);
        float speed_t = smoothstep(ramp_min, ramp_max, length(velocity));
        vec2 ramp_pos = vec2(fract(16.0 * speed_t), floor(16.0 * speed_t) / 16.0);
        vec4 lengedColor = texture2D(uColorRamp, ramp_pos);
        gl_FragColor = lengedColor * texelColour.b;
    } else {
        discard;
    }
}
