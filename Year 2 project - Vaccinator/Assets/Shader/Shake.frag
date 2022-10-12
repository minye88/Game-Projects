uniform sampler2D currentTexture;
uniform float time;

void main()
{
    vec2 coord = gl_TexCoord[0].xy;
    coord.y += cos(radians(500*time + coord.y * 0)) * 0.06*sin(time);
    vec4 pixel_color = texture2D(currentTexture, coord);
    gl_FragColor = pixel_color;
}
