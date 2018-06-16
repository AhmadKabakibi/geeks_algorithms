function find(trie, str) {
    str = str.split('');
    let node = trie[str[0]];

    if(!node) {
        return 0;
    }
    let count = (str.length === 1) ? node._cnt : 0;
    for(let i = 1; i < str.length; i++) {
        node = node[str[i]];
        if(!node) {
            break;
        }
        if(i === str.length - 1) {
            count = node._cnt;
        }
    }
    return count;
}

function addToTrie(trie, str) {
    str = str.split('');

    if(!trie[str[0]]) {
        trie[str[0]] = {_cnt: 0};
    }
    let node = trie[str[0]];
    node._cnt++;
    for(let i = 1; i < str.length; i++) {
        node[str[i]] = node[str[i]] || {_cnt: 0};

        node[str[i]]._cnt++;

        node = node[str[i]];
    }

    return trie;
}

function processData(input) {
    input = input.split('\n');

    let n = parseInt(input[0]);
    let trie = {};
    for(let i = 1; i <= n; i++) {
        let line = input[i].split(' ');
        let cmd = line[0];
        let str = line[1];

        if(cmd === 'add') {
            trie = addToTrie(trie, str);
            continue;
        }
        if(cmd === 'find') {
            console.log(find(trie, str));
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
