
const Snake = (props) => {
		
	
	const elements = props.SnakeDots.map((item ,index) => {

		const style = {
			left : item.left , 
			top :  item.top ,
			backgroundColor : item.backgroundColor ,
		} ; 
	
		return(
			<span   className="Snake-Dot" 
					key={index}
					style={style}
			>
			</span>
		) ; 
	}) ; 
	
	return (
		<div > 
			{elements}
		</div>
	) ; 
} ; 

export default Snake ; 