
// vec4 getColor() {
//     return vec4(1.0);
// }

// Type Qualifiers - changing the behaviour of a variable a bit
// Sometimes global variables will have another qualifier before the "type"
// 3 seperate ways to set "parameters" on shader programs
// uniform vec4 example1;
// attribute vec4 example2;
// varying vec4 example3;

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
