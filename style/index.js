// inline styles

// const styleMe = <h1 style={{
//   background: 'lightblue',
//     color: 'darkred'
// }}>Please style me! I am so bland!</h1>;

// its a better approch to use objects in inline styles 
const styles = {
  background: 'lightblue',
  color: 'darkred',
  // style names in react are written in camelCase
  marginTop: '100px',
  fontSize: 50 //in case of numbers it assumes a px after it 
}

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
styleMe, 
document.getElementById('app')
);