module.exports.bmi = (height, weight) =>{

    bmi = (weight/(height*height)).toFixed(2);

    if(bmi<18.5)
    {
    index = "Under Weight";
    }
    else if (bmi>=18.5 && bmi<=24.9)
    {
    index = "Normal Weight";
    }

    else if (bmi>24.9 &&  bmi<=29.9)
    {
        index = "over Weight";
    }
    else
    {
     index = "obesity";
    }


    return {
        bmi: bmi,
        index: index,
    }

};


