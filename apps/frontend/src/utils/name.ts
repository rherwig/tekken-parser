export function stripName(name: string) {
    return name.toLowerCase().replace(/\s/gi, '-');
}
