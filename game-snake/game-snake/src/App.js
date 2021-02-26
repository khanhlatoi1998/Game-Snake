import './App.css';
import Snake from './Component/Snake.js' ; 
import Food from './Component/Food.js' ;
import {useState , useEffect } from 'react' ; 


function App() {
		
	const x = (Math.floor(Math.random()*50))*2  ; 
	const y = (Math.floor(Math.random()*50))*2 ; 
	
	const [FoodDots , setFoodDots] = useState([
		{
			left : x + "%" , 
			top : y + "%" ,
		
		} , 
	]) ; 
	
	const [SnakeDots , setSnakeDots] = useState([
		{
			left : "0%" , 
			top : "0%" ,	
		} , 
		{
			left : "2%" , 
			top : "0%" ,
			backgroundColor : "yellow" ,
		}
	]) ;

	const [Diretion , setDiretion] = useState("RIGHT") ; 
	
	useEffect(() => {
		setInterval(moveSnake , 5000000) ; 
		document.onkeydown = onKeydown ; 
	
	} , [] ) ; 
	
	const onKeydown = (e) => {
		e = e || window.event ; 
		switch (e.key) {
			case "ArrowUp" : 
				setDiretion("UP") ; 
				break ; 
			case "ArrowDown" : 
				setDiretion("DOWN") ; 
				break ; 
			case "ArrowLeft" : 
				setDiretion("LEFT") ; 
				break ; 
			case "ArrowRight" : 
				setDiretion("RIGHT") ; 
				break ;
		} ; 	
	} ; 
	
	const moveSnake = () => {
		let dots = [...SnakeDots] ;
		let head = dots[dots.length - 1] ; /*phan biet dot nao la dau , dot nao la duoi*/
		switch (Diretion) {
			case "RIGHT" : 
				head = [
					{
						left : Number(head.left.slice(0,1)) + 2 + "%"  , 
						top : "6%" , 
					}
				] ; 
			break ; 
			case "LEFT" : 
				head = [
					{
						left : Number(head.left.slice(0,1)) - 2 + "%", 
						top : "4%" ,  
					}
				] ; 
			break ;
			case "UP" : 
				head = [
					{
						left : "4%" , 
						top : Number(head.left.slice(0,1)) + 2 + "%",  
					}
				] ; 
			break ;
			case "DOWN" : 
				head = [
					{
						left : "4%" , 
						top : Number(head.left.slice(0,1)) - 2 + "%" ,  
					}
				] ; 
			break ;	
		} ; 
		dots.push(head) ; 
		dots.shift() ;
		setSnakeDots(dots) ; 
		console.log(head) ;
	} ; 
	
	console.log(Diretion) ;
	
  return (
    <div className="Game-Snake" >
		<Snake SnakeDots={SnakeDots} />	
		<Food FoodDots={FoodDots} /> 
		
    </div>
  );
}

export default App;
