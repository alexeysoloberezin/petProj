export function convertStringToSCSSVariables(inputString: string): Record<string, string>[] | null {
    if (!inputString.trim()) {
        return null;
    }

    const lines = inputString.trim().split('\n');

    if (lines.length === 0 || lines[0] === '') {
        return null;
    }

    const variables: Record<string, string>[] = [];

    for (let i = 0; i < lines.length; i += 2) {
        if(lines[i]?.trim() && lines[i + 1]?.trim()){
            const key = lines[i].trim();
            const value = lines[i + 1].trim();

            if (key && value && isValidColor(value)) {
                variables.push({key, value})
            }
        }
    }

    console.log(variables);

    return variables;
}

function isValidColor(value: string): boolean {
    const colorRegex = /^(#([0-9a-f]{3}){1,2}|rgba?\(.+\))$/i;
    return colorRegex.test(value);
}
