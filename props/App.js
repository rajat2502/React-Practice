import React from "react"
import Joke from "./components/Joke"

function App(){
    return (
    <div>
        <Joke content = {{
            question: "what's my name",
            punchLine: "i dont know"   
         }
        }/>
        
        <Joke content = {{
             question: "what's your name",
             punchLine: "U dont know"   
         }
        }/>
    
        
        <Joke content = {{
            question: "what's his name",
            punchLine: "he dont know"   
         }
        }/>
     
        
        <Joke content = {{
            question: "what's her name",
            punchLine: "she dont know"   
         }
        }/>
    
        
        <Joke content = {{
            question: "what's is name",
            punchLine: "dont know :-p"   
         }
        }/>
    
    </div>
    )
}

export default App


