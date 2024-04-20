document.getElementById('my_form').addEventListener('submit', function (event) {
    event.preventDefault();
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var city = document.getElementById("city").value;

    var para1 = document.createElement('p');
    var para2 = document.createElement('p');
    var para3 = document.createElement('p');

    para1.textContent = ' Your first is ' + first_name
    para1.style.color = 'red';

    para2.textContent = ' Your Last is ' + last_name
    para2.style.color = 'green';

    para3.textContent = ' Your City is ' + city
    para3.style.color = 'blue';

    var res = document.getElementById('result');

    res.append(para1);
    res.append(para2);

    res.append(para3);

});
