class MyForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="card">
      <h2>Get Pricing Quote</h2>
      <form action="" method="post">
        <div class="row">
          <div class="col-12 col-md-6">
            <label for="Name">Name*</label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="Name"
              placeholder="your name"
              required
            />
          </div>
          <div class="col-12 col-md-6">
            <label for="Phone">Number</label>
            <input
              type="tel"
              class="form-control"
              name="phone"
              id="Phone"
              placeholder="+977 123456789"
              required
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="Email">Email*</label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="Email"
              placeholder="youremail@domain.com"
              required
              list="exampleList"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label for="Message">Message</label>
            <input
              type="text"
              name="message"
              id="Message"
              class="form-control"
              placeholder="your message"
              required
         />
          </div>
        </div>

        <button class="btn-all m-0" type="submit">
          Free Consultation
        </button>
      </form>
    </div>

      `;
    }
  }
  customElements.define("my-form", MyForm);

