// log module 정의
const log = {
  info: function (info) {
    console.log("Info" + info);
  },
  warning: function (warning) {
    console.log("Warning" + warning);
  },
  info: function (error) {
    console.log("Error" + error);
  },
};

// module 내보내기
module.exports = log;
