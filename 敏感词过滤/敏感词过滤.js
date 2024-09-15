'use strict';

// 特殊符号转化Unicode 编码 存储在对象中
const ignoreChars = " \t\r\n~!@#$%^&*()_+-=【】、{}|;':\"，。、《》？αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ。，、；：？！…—·ˉ¨‘’“”々～‖∶＂＇｀｜〃〔〕〈〉《》「」『』．〖〗【】（）［］｛｝ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩①②③④⑤⑥⑦⑧⑨⑩⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇≈≡≠＝≤≥＜＞≮≯∷±＋－×÷／∫∮∝∞∧∨∑∏∪∩∈∵∴⊥∥∠⌒⊙≌∽√§№☆★○●◎◇◆□℃‰€■△▲※→←↑↓〓¤°＃＆＠＼︿＿￣―♂♀┌┍┎┐┑┒┓─┄┈├┝┞┟┠┡┢┣│┆┊┬┭┮┯┰┱┲┳┼┽┾┿╀╁╂╃└┕┖┗┘┙┚┛━┅┉┤┥┦┧┨┩┪┫┃┇┋┴┵┶┷┸┹┺┻╋╊╉╈╇╆╅╄";
const ignoreObj = {};
for (let i = 0, j = ignoreChars.length; i < j; i++) {
  ignoreObj[ignoreChars.charCodeAt(i)] = true;
}

// DFA算法过滤敏感词
// 构建有限状态机
// 生成的数据结构形制如下
/**
 * {
 *   '王': {
 *     '八': {
 *       '蛋': {
 *         empty: true
 *       }
 *       '羔': {
 *         '子': {
 *           empty: true
 *         }
 *       }
 *     }
 *   }
 * }
 */
function buildMap(wordList) {
  const result = {};

  for (let i = 0, len = wordList.length; i < len; ++i) {
    let map = result;
    // "王八蛋"
    const word = wordList[i];
    for (let j = 0; j < word.length; ++j) {
      const ch = word.charAt(j).toLowerCase();
      // 如果里面已经有相同的字
      if (map[ch]) {
        map = map[ch];
        // 如果后面还有字但是已经截取到底 比如王八蛋 已经匹配到王八 则直接跳出循环
        if (map.empty) {
          break;
        }
      } else {
        if (map.empty) {
          delete map.empty;
        }
        map[ch] = {
          empty: true,
        };
        map = map[ch];
      }
    }
  }
  return result;
}

// 获取敏感词列表
function getSensitiveWords() {
  /*
  let words = [];
  if (words.length === 0) {
    const data = fs.readFileSync(path.join(__dirname, './words'), 'utf8');
    words = data.split('\n');
  }
  return words.filter(item => !!item);
  */
  return [
    '王八蛋',
    '王八羔子'
  ]
}

// 获取敏感词库对象
const sensitiveWords = getSensitiveWords();
const map = buildMap(sensitiveWords);

// 具体检测代码。
function check(map, content) {
  const result = [];
  let stack = [];
  let point = map;
  debugger
  for (let i = 0, len = content.length; i < len; ++i) {
    const code = content.charCodeAt(i);
    if (ignoreObj[code]) {
      continue;
    }
    const ch = content.charAt(i);
    const item = point[ch.toLowerCase()];
    if (!item) {
      i = i - stack.length;
      stack = [];
      point = map;
    } else if (item.empty) {
      stack.push(ch);
      result.push(stack.join(''));
      stack = [];
      point = map;
    } else {
      stack.push(ch);
      point = item;
    }
  }
  return result;
}

function checkSensitive(content) {
  const words = check(map, content);
  return words;
}


console.log(checkSensitive('老板黄鹤*王&八&（&蛋，吃喝嫖赌，欠下了3.5个亿，带着他的小姨子跑了'));