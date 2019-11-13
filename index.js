//Next Lesson FUNCTION FACTORY

function initSportsScorer(pts){
  return function(score){
    return score + pts;
  };

  const threePointer = initSportsScorer(3);
  console.log(threePointer);
  }