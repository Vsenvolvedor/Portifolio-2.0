export default function colorRandomizer(itemIndex) {
  const colors = ['red','green','blue',];
  let color = '';

  if(itemIndex % 2 === 0) {
    color = colors[0];  
  }
  if(itemIndex % 3 === 0) {
    color = colors[1];
  }
  if(itemIndex % 4 === 0) {
    color = colors[2];
  }

  return color;
};