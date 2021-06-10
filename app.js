class HackerHeroTests{
    return_sum(num1, num2){
        return num1 + num2;
    }

    countdown_by_8(){
        for(let i = 2019; i > 0; i-=8){
            console.log(i);
        }
    }

    celcius_to_fahrenheit(cDegrees){
        return (9/5 * cDegrees) + 32;
    }

    make_it_big(arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i]>0)
                arr[i] = "big";
        }
        return arr
    }

    double(arr){
        for(let i=0; i<arr.length ; i++){
            arr[i] = arr[i] * 2;
        }
        return arr
    }

    count_greater_than_y(arr, y){
        let greaterThanY = 0;
        for(let i=0 ; i<arr.length; i++){
            if(arr[i] > y)
                greaterThanY += 1
        }
        return greaterThanY
    }

    sigma(num){
        let sum = 0;
        for(let i=1; i<=num; i++){
            sum += i;    
        }
        return sum
    }

    factorial(num){
        let product = 1;
        for(let i=1; i<=num; i++){
            product = product * i  
        }
        return product
    }

    swap_to_center(arr){
        for(let first=0, last=arr.length-1, temp; first<arr.length/2; first++, last--){
            temp = arr[first]
            arr[first] = arr[last]
            arr[last] = temp
        }
        return arr
    }

    threes_fives(num){
        for(var sum=0, i=1; i<=num; i++){
            if(i%3 != 0 && i%5 != 0){
                sum += i
            }
        }
        return sum
    }
}

module.exports = HackerHeroTests;