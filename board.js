const black = '██'
    const white = '  '
    let block = ''
        for(let i = 0;i < 8;i++) {
            let line = '';
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 == 0) {
                    line += white;
                } else {
                    line += black;
                }
            }
            block += line;
            block += '\n';
        }
    console.log(block);
