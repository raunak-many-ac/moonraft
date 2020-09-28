const portfolio_solutions = [{
        investment_options: "Conservative growth",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
},
{
        investment_options: "Conservative growth",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
},
{
        investment_options: "Conservative growth",
        available_balance: "$1,115,125.35",
        price_per_unit: "$23.2"
},
{
        investment_options: "Conservative growth",
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
                var newdiv = document.createElement('div');


                var invest_opt_div = document.createElement('div');
                invest_opt_div.innerText = portfolio_solutions[i].investment_options;
                invest_opt_div.className = "investment-options";

                var avail_bal = document.createElement('div');
                avail_bal.innerText = portfolio_solutions[i].available_balance;
                avail_bal.className = "available-balance";

                var prc_per_unit = document.createElement('div');
                prc_per_unit.innerText = portfolio_solutions[i].price_per_unit;
                prc_per_unit.className = "price-per-unit"

                var input_field = document.createElement('input');
                input_field.className = "text-field-table";

                newdiv.appendChild(invest_opt_div);
                newdiv.appendChild(avail_bal);
                newdiv.appendChild(prc_per_unit);
                newdiv.appendChild(input_field);

                if (i % 2 == 0) newdiv.className = "rectangle-dark";
                else newdiv.className = "rectangle-light";

                portfolio.appendChild(newdiv);
        }
}

function populate_potfolio_builder() {

        console.log("populate_potfolio_builder()");
        for (var i = 0; i < portfolio_builder.length; i++) {
                var newdiv = document.createElement('div');


                var invest_opt_div = document.createElement('div');
                invest_opt_div.innerText = portfolio_builder[i].investment_options;
                invest_opt_div.className = "investment-options";

                var avail_bal = document.createElement('div');
                avail_bal.innerText = portfolio_builder[i].available_balance;
                avail_bal.className = "available-balance";

                var prc_per_unit = document.createElement('div');
                prc_per_unit.innerText = portfolio_builder[i].price_per_unit;
                prc_per_unit.className = "price-per-unit"

                var input_field = document.createElement('input');
                input_field.className = "text-field-table";

                newdiv.appendChild(invest_opt_div);
                newdiv.appendChild(avail_bal);
                newdiv.appendChild(prc_per_unit);
                newdiv.appendChild(input_field);

                if (i % 2 == 0) newdiv.className = "rectangle-dark";
                else newdiv.className = "rectangle-light";

                portfolio_bldr.appendChild(newdiv);
        }
}


function populate_valueDrivenInvestments() {

        console.log("populate_valueDrivenInvestments()");
        for (var i = 0; i < value_driven_investments.length; i++) {
                var newdiv = document.createElement('div');


                var invest_opt_div = document.createElement('div');
                invest_opt_div.innerText = value_driven_investments[i].investment_options;
                invest_opt_div.className = "investment-options";

                var avail_bal = document.createElement('div');
                avail_bal.innerText = value_driven_investments[i].available_balance;
                avail_bal.className = "available-balance";

                var prc_per_unit = document.createElement('div');
                prc_per_unit.innerText = value_driven_investments[i].price_per_unit;
                prc_per_unit.className = "price-per-unit"

                var input_field = document.createElement('input');
                input_field.className = "text-field-table";

                newdiv.appendChild(invest_opt_div);
                newdiv.appendChild(avail_bal);
                newdiv.appendChild(prc_per_unit);
                newdiv.appendChild(input_field);

                if (i % 2 == 0) newdiv.className = "rectangle-dark";
                else newdiv.className = "rectangle-light";

                val_drvn_invst.appendChild(newdiv);
        }

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
        prc_per_unit.style.marginRight = "4%";

        newdiv.appendChild(invest_opt_div);
        newdiv.appendChild(avail_bal);
        newdiv.appendChild(prc_per_unit);

        newdiv.className = "rectangle-light";

        val_drvn_invst.appendChild(newdiv);
}



