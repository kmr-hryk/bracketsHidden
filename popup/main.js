const btnArray = document.getElementsByTagName('button');

const trigger = e => {
  chrome.tabs.query({ active: true }, tab => {
    const id = e.target.id;
    chrome.tabs.sendMessage(tab[0].id, id, res => {
      selectEle('hideBtn').style.color = '#fff';
      selectEle('grayBtn').style.color = '#fff';
      selectEle('originBtn').style.color = '#fff';
      selectEle(res).style.color = '#000';
    });
  });
};

const selectEle = id => {
  return document.getElementById(id);
};

selectEle('hideBtn').addEventListener('click', trigger);
selectEle('grayBtn').addEventListener('click', trigger);
selectEle('originBtn').addEventListener('click', trigger);

console.log('done');
