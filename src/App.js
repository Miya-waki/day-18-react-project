 import "./App.css";

/**
 *style => ""
style = "background-color:red"

 *rule
 style ={{}} 
style ={{backgroundColor:"red"}}

first two letter css properties are now converted into camelCase property
the value of the property must be in double quote
 */

export default function App() {
  return (
    <div>
      <div style ={{color:"white", backgroundColor:"royalblue"}}>hello world</div>
    </div>
  );
}
