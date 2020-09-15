const generate_btn = document.querySelector('.generate-btn');
    generate_btn.addEventListener('click', () => {
        const four_digit = Math.random() * 9999;
        const convert_round = Math.round(four_digit);
        if (convert_round > 1000) {
            document.getElementById('display_generate_pin').innerHTML = convert_round;
            return convert_round;
        }    
    });
    const submit_btn = document.querySelector('.submit-btn');
        submit_btn.addEventListener('click', () => {
            const display_generate_pin = document.getElementById('display_generate_pin').innerHTML;
            const parseInt_display_generate_pin = parseInt(display_generate_pin);
            const display_output = document.getElementById('display_output').value;
            if (display_output.length == 0) {
                alert('Your Pin Field Maybe Empty! Please Fill up Pin Field');
            }
            else if (parseInt_display_generate_pin == display_output  && display_output.length > 0) {
                document.getElementById('pin_match').style.display = 'block';
                document.getElementById('pin_not_match').style.display = 'none';
            }
            else if (parseInt_display_generate_pin != display_output && display_output.length > 0) {
                   
                document.getElementById('pin_not_match').style.display = 'block';
                document.getElementById('pin_match').style.display = 'none';

                const try_left = document.getElementById('try_left').innerHTML;
                const parseFloat_try_left =  parseFloat(try_left);
                    if (parseFloat_try_left <= 3  && parseFloat_try_left > 1) {
                        document.getElementById('try_left').innerHTML = parseFloat_try_left - 1;
                    }
                    else if (parseFloat_try_left == 1) {
                        const submit_btn = document.querySelector('.submit-btn');
                        submit_btn.setAttribute('disabled', 'disabled');
                        submit_btn.style.backgroundColor = 'black';
                        document.getElementById('try_left').innerHTML = '0';
                    }          
            }  
        });
function display(digit_value){
    const do_parse = parseInt(digit_value);
    document.getElementById('display_output').value += do_parse;
}
function removed_last_item() {
    const removed_last_item = document.getElementById('display_output').value;
    let  convert_number_to_string = removed_last_item.toString(removed_last_item.length);
    convert_number_to_string = convert_number_to_string.slice(0, -1);
    document.getElementById('display_output').value = convert_number_to_string;
}
function clear_display(){ 
    document.getElementById("display_output").value = "" ;
}