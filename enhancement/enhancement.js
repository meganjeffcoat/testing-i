module.exports = {
    
    success: (item) => {
        item.enhancementCounter++;

        if (item.enhancementCounter < 16) {
            item.enhancement = `+${item.enhancementCounter}`;
            item.name = `[+${item.enhancementCounter}] ${item.name}`;
        } else if (item.enhancementCounter < 21 && item.enhancementCounter > 15) {
            if (item.enhancementCounter === 16) {
                item.enhancement = 'PRI'
            } else if (item.enhancementCounter === 17) {
                item.enhancement = 'DUO'
            } else if (item.enhancementCounter === 18) {
                item.enhancement = 'TRI'
            } else if (item.enhancementCounter === 19) {
                item.enhancement = 'TET'
            } else if (item.enhancementCounter === 20) {
                item.enhancement = 'PEN'
            }
            item.name = `[${item.enhancement}] ${item.name}`;
        } else if (item.enhancementCounter > 20) {
            throw new Error('exceeded max enhancement');
        }
        return item;
    },
}