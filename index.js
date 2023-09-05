
import Express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import ejs from "ejs";

const app = Express();

app.set("view engine", "ejs");
const port = 3000;
app.use(Express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index.ejs");
});


app.post("/", async (req, res) => {
	try {
		const Year=new Date().getFullYear();
		

		console.log(req.body);
		const currency1 = req.body.Currency1;
		const currency2 = req.body.Currency2;
		const amount = (req.body.amount);
		const response = await axios.get(
			`https://api.apilayer.com/currency_data/convert?to=${currency1}&from=${currency2}&amount=${amount}`,
			{
				headers: {
					"apikey": "AbpZdrnxcdQIx2H86u67hpcxSc9JEn0P"
				}
			}
		);
		const call = response.data;
		//   console.log(call);
		res.render("index.ejs", {
			data: call.result, currency1: currency1, currency2: currency2, amount: amount,Year:Year
		})
	} catch (error) {
		console.error("Failed Currency1 make request:", error.message);
		res.render("index.ejs", {
			error: "No activities that match your criteria.",
		});
	}
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});