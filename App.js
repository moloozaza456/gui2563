import react from 'react' ;
import {View,text} from 'react-native' ;

export default function app(){
  return(
    <view style = {{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    }}>
      <text>Hello World</text>
    </view>
  )
}