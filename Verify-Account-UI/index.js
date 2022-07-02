const inputs = document.querySelectorAll('.inputDiv input')

for(let i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('keydown', (ev) => {
		inputs[i].value = inputs[i].value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
		const ascii = inputs[i].value.charCodeAt()
		if(ascii >= 48 && ascii <= 57 && ev.keyCode !== 8){
			try{
				inputs[i+1].focus()
			}
			catch(err){}
		}
		else if(ev.keyCode === 8 && inputs[i].value === ''){
			try{
				inputs[i-1].focus()
			}
			catch(err){}
		}
		else if(ev.keyCode === 8 && inputs[i].value !== ''){
			inputs[i].value = ''
		}
		else if(isNaN(ascii)){
			inputs[i].value =''
		}
	})
}