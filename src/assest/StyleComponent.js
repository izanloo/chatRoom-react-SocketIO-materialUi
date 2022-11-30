import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ToastContainer } from "react-toastify";
import bg from './images/bg.jpg'
import bgChatRoom from './images/bgPageChatRoom-.jpg'

// background:#e5e5e5;
//page-login----------------------------------
const NeonStyle = styled(Typography)` 
		animation: neon 3s infinite;
    font-size:120px;
    margin-top:40px;
	@keyframes neon{
		0%, 39%, 41%, 59%, 61%, 100%{
			text-shadow:
			white 0 0 12px,
			#b3d414 0 0 24px,
			#b3d414 0 0 36px;
		}
		40%,60%{
			text-shadow:none;
		}
	}
`
export { NeonStyle }

export const PageLogin = styled('div')`
  background-image:url(${bg});
  background-size:cover;
  bacground-position:center;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  direction:rtl;
  img{
    width:180px;
  }
  form{
    position: relative;
    z-index: 1;
    background-color: rgba(0,0,0,.5) ;
    border-radius: 10px;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;    
    
    input {
    outline: 0;
    background:none ;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    font-size: 14px;
    font-family: 'Comfortaa', cursive;
    &:focus {
        background: #dbdbdb;
      }
    }    
    button {
        font-family: 'Comfortaa', cursive;
        text-transform: uppercase;
        outline: 0;
        background: #4b6cb7;
        width: 100%;
        border: 0;
        border-radius: 5px;
        padding: 15px;
        color: #FFFFFF;
        font-size: 14px;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        margin-bottom: 18px;
        &:active {
            background: #395591;
          }  
    }
  
`
export const ToastContainerStyle = styled(ToastContainer)`
  text-align:right;
  display:flex;
`

//page-chatRoom----------------------------------
export const PageChatRoom = styled(Box)`
    background-image:url(${bgChatRoom});
    height:100vh;
    overflow: scroll;
    .avatar{
      width:45px;
      border-radius: 25px;
      border: 1px solid white;
    }
    `
    export const BoxInput = styled(Box)`
    bottom: 0;
    position: absolute;
    background:white;
    width:100%;
    display:flex;
    border-top: 1px solid gray;
    justify-content:space-between;
    padding-top:5px;
    padding-bottom:5px;
    direction:rtl;
  
  div{
    width:100%;
    border:0px;
  }
  input{
    width:100%;
    border:1px solid gray;
    border-radius:25px;
    background:#f1e9e9;
    padding:5px;
    margin-right:5px;
    margin-left:10px;
  }
  button{
    font-size:25px;
  }

`
export const BoxMessage = styled(Box)`
  display:flex;
  align-items:center;
  p{
    background:#9acd32;
    padding:8px;
    border-radius:7px;
    margin-left:2px;
    margin-right:2px;
    i{
      display:block;
      font-size:10px;
      color:gray;
    }
    span{
      display:flex;
      color:gray;
      align-items:center;
      margin-top:3px;
      label{
        font-size:10px;
      }
    }
  }
  button{
    background: none;
    border: 0;
    color:gray;
  }
`