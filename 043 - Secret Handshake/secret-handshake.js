export const commands = (handshake) => {
    console.log(handshake)
    const result = []
    if (handshake & 1)
        result.push("wink")
    if (handshake & 2)
        result.push("double blink")
    if (handshake & 4)
        result.push("close your eyes")
    if (handshake & 8)
        result.push("jump")
    if (handshake & 16)
        result.reverse()
    console.log(handshake, result)
    return result
};