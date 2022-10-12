uniform sampler2D currentTexture;
uniform float time;

void main() {
    vec2 coord = gl_TexCoord[0].xy;
    coord.x += sin(radians(50*time + coord.y * 400)) * 0.02;
    coord.y += cos(radians(50*time + coord.x * 150)) * 0.03;
    vec4 pixel_color = texture2D(currentTexture, coord);

    gl_FragColor = pixel_color;
}

