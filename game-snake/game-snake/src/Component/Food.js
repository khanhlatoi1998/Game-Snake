
const Food = (props) => {
	
	const elements = props.FoodDots.map((item ,index) => {
		const style = {
			left : item.left , 
			top : item.top ,
		} ; 
		
		return(
				<div className="Food" 
					 key={index}
					 style={style}
				> 
				</div>
		) ; 
	}) ; 
	
	return (
		<div >
			{elements}
		</div>
	) ; 
} ; 

export default Food ; 