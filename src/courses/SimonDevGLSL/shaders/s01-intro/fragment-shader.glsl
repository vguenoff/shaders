
// vec4 getColor() {
//     return vec4(1.0);
// }

// Bigges use of this is to return multiple values
// by declaring multiple out parameters
void getClolorUsingOut(in vec4 color, out vec4 final) {
    final = color * vec4(0.5);
}

void main() {
    vec4 final;
    // assigns the result fo final using out
    getClolorUsingOut(vec4(0.0, 0.0, 1.0, 1.0), final);

    gl_FragColor = final;
}
