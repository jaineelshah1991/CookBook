<script src="https://js.stripe.com/v3/"></script>

<form action="stripe.php" method="POST">
  <label for="card-number">Card Number</label>
  <input type="text" id="card-number" name="card_number" />

  <label for="exp-month">Expiration Month</label>
  <input type="text" id="exp-month" name="exp_month" />

  <label for="exp-year">Expiration Year</label>
  <input type="text" id="exp-year" name="exp_year" />

  <label for="cvc">CVC</label>
  <input type="text" id="cvc" name="cvc" />

  <button type="submit">Pay Now</button>
</form>


