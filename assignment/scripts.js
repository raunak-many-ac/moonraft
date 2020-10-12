const portfolio_solutions = [{
        investment_options: "Conservative growth",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
},
{
        investment_options: "Moderate growth",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
},
{
        investment_options: "Gift Preservation",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
},
{
        investment_options: "Growth",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
}];

const portfolio_builder = [{
        investment_options: "Money Market",
        available_balance: "_",
        price_per_unit: "$23.2"
},
{
        investment_options: "Short term bond",
        available_balance: "$142,456,32",
        price_per_unit: "$45.8"
},
{
        investment_options: "Total Bond",
        available_balance: "$123,456,23",
        price_per_unit: "$10.5"
},
{
        investment_options: "Total International Bond",
        available_balance: "$324,564,23",
        price_per_unit: "$10.5"
},
{
        investment_options: "Total Equity",
        available_balance: "_",
        price_per_unit: "$10.5"
},
{
        investment_options: "Total U.S. Stock",
        available_balance: "_",
        price_per_unit: "$10.5"
},
{
        investment_options: "Total International Stock",
        available_balance: "_",
        price_per_unit: "$10.5"
}];

const value_driven_investments = [{
        investment_options: "E.S.G US Stock",
        available_balance: "_",
        price_per_unit: "$23.2"
},
{
        investment_options: "E.S.G Internal Stock",
        available_balance: "_",
        price_per_unit: "$45.8"
},
{
        investment_options: "E.S.G Global Stock",
        available_balance: "_",
        price_per_unit: "$10.5"
}];

var portfolio = document.getElementById("portfolio");
var portfolio_bldr = document.getElementById("portfolio-builders");
var val_drvn_invst = document.getElementById("value-driven-investments");


populate_Portfolio();
populate_potfolio_builder();
populate_valueDrivenInvestments();

function populate_Portfolio() {

        console.log("populate_Portfolio()");
        for (var i = 0; i < portfolio_solutions.length; i++) {
                var newdiv = generateRow(portfolio_solutions, i);
                var newdiv_mobile = generateMobileRow(portfolio_solutions, i);

                portfolio.appendChild(newdiv);
                portfolio.appendChild(newdiv_mobile);
        }
}


function populate_potfolio_builder() {

        console.log("populate_potfolio_builder()");
        for (var i = 0; i < portfolio_builder.length; i++) {                
                var newdiv = generateRow(portfolio_builder, i);
                var newdiv_mobile = generateMobileRow(portfolio_builder, i);

                portfolio_bldr.appendChild(newdiv);
                portfolio_bldr.appendChild(newdiv_mobile);
        }
}


function populate_valueDrivenInvestments() {

        console.log("populate_valueDrivenInvestments()");
        for (var i = 0; i < value_driven_investments.length; i++) {
                var newdiv = generateRow(value_driven_investments, i);
                var newdiv_mobile = generateMobileRow(value_driven_investments, i);

                val_drvn_invst.appendChild(newdiv);
                val_drvn_invst.appendChild(newdiv_mobile);
        }

        
        newdiv = getTotalOfAll();
        val_drvn_invst.appendChild(newdiv);

        newdiv = getTotalofAll_Mobile();
        val_drvn_invst.appendChild(newdiv);
}

//..summary of all the table data for web view
function getTotalOfAll(){
        var newdiv = document.createElement('div');
        var invest_opt_div = document.createElement('div');
        invest_opt_div.innerText = "Total:";
        invest_opt_div.className = "normal-text";
        invest_opt_div.style.marginLeft = "3%";

        var avail_bal = document.createElement('div');
        avail_bal.innerText = "Clear All";
        avail_bal.className = "investment-options";
        avail_bal.style.marginRight = "15%";

        var prc_per_unit = document.createElement('div');
        prc_per_unit.innerText = "100%";
        prc_per_unit.className = "bold-text";
        prc_per_unit.style.marginRight = "2%";
        var as_off_100 = document.createElement('div');
        as_off_100.innerHTML = "as  100%";
        as_off_100.className = "normal-text";
        prc_per_unit.appendChild(as_off_100);

        newdiv.appendChild(invest_opt_div);
        newdiv.appendChild(avail_bal);
        newdiv.appendChild(prc_per_unit);

        newdiv.className = "rectangle-light-web";
        return newdiv;
}

//..summary of all the table data for mobile view
function getTotalofAll_Mobile(){
        var newdiv = document.createElement('div');
        var invest_opt_div = document.createElement('div');
        invest_opt_div.innerText = "Total:";
        invest_opt_div.className = "normal-text";
        invest_opt_div.style.marginLeft = "3%";

        var avail_bal = document.createElement('div');
        avail_bal.innerText = "Clear All";
        avail_bal.className = "investment-options";
        avail_bal.style.marginRight = "15%";
        avail_bal.style.cssFloat = "right";

        var prc_per_unit = document.createElement('div');
        prc_per_unit.innerText = "100%";
        prc_per_unit.className = "bold-text";
        var as_off_100 = document.createElement('div');
        as_off_100.innerHTML = "as  100%";
        as_off_100.className = "normal-text";
        prc_per_unit.appendChild(as_off_100);

        newdiv.appendChild(invest_opt_div);
        newdiv.appendChild(avail_bal);
        newdiv.appendChild(prc_per_unit);

        newdiv.className = "rectangle-light-mobile";
        return newdiv;        
}

//..table row generator
//..visible on web view
function generateRow(json, i) {
        var newdiv = document.createElement('div');

        var invest_opt_div = document.createElement('div');
        invest_opt_div.innerText = json[i].investment_options;
        invest_opt_div.className = "investment-options";

        var avail_bal = document.createElement('div');
        avail_bal.innerText = json[i].available_balance;
        avail_bal.className = "available-balance";

        var prc_per_unit = document.createElement('div');
        prc_per_unit.innerText = json[i].price_per_unit;
        prc_per_unit.className = "price-per-unit"

        var input_field_div = document.createElement('div');
        input_field_div.className = "input_field_div";

        var input_field = document.createElement('input');
        input_field.className = "input_field";

        input_field_div.appendChild(input_field);

        newdiv.appendChild(invest_opt_div);
        newdiv.appendChild(avail_bal);
        newdiv.appendChild(prc_per_unit);
        newdiv.appendChild(input_field_div);

        if (i % 2 == 0) newdiv.className = "rectangle-dark-web";
        else newdiv.className = "rectangle-light-web";

        return newdiv;
}

//..table row generator for mobile view
//..visible on mobile view
function generateMobileRow(json, i){

        var newdiv = document.createElement('div');

        var invest_opt_div = document.createElement('div');
        invest_opt_div.innerText = json[i].investment_options;
        invest_opt_div.className = "investment-options";

        var cost = document.createElement('div');
        cost.className = "cost";

        var avail_bal_span = document.createElement('span');
        var avail_bal_text = document.createElement('p');
        avail_bal_text.innerHTML = "Available Balance";
        avail_bal_text.className = "column-name-mobile-price";
        var avail_bal = document.createElement('p');
        avail_bal.innerText = json[i].available_balance;
        avail_bal.className = "available-balance";
        avail_bal_span.appendChild(avail_bal_text);     
        avail_bal_span.appendChild(avail_bal);
        

        var prc_per_unit_span = document.createElement('span');
        var prc_per_unit = document.createElement('p');
        var prc_per_unit_text = document.createElement('p');
        prc_per_unit_text.innerHTML = "Price per Unit";
        prc_per_unit_text.className = "column-name-mobile-price";
        prc_per_unit.innerText = json[i].price_per_unit;
        prc_per_unit.className = "price-per-unit";
        prc_per_unit_span.appendChild(prc_per_unit_text);
        prc_per_unit_span.appendChild(prc_per_unit);

        cost.appendChild(avail_bal_span);
        cost.appendChild(prc_per_unit_span);

        var input_field_div = document.createElement('div');
        input_field_div.className = "input_field_div";

        var percentage_text = document.createElement('div');
        percentage_text.innerText = "Percentage";
        percentage_text.className = "column-name-mobile-price";

        var input_field = document.createElement('input');
        input_field.className = "input_field";

        input_field_div.appendChild(percentage_text);
        input_field_div.appendChild(input_field);

        newdiv.appendChild(invest_opt_div);
        newdiv.appendChild(cost);
        newdiv.appendChild(input_field_div);

        if (i % 2 == 0) newdiv.className = "rectangle-dark-mobile";
        else newdiv.className = "rectangle-light-mobile";

        return newdiv;
}




