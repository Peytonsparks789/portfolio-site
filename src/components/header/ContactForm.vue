<template>
  <div v-if="isFormVisible" class="modal-backdrop" @click="closeModal">
    <div class="modal" @click.stop>
      <div class="close-button" @click="closeModal">
        <span></span>
        <span></span>
      </div>
      <form
        target="_blank"
        method="POST"
        action="https://usebasin.com/f/d43360e4ea60"
        enctype="multipart/form-data"
      >
        <div class="FormHeader">
          <h2>Want to Get in Touch?</h2>
          <p>
            If you would like to send any feedback or inquiries, I encourage
            you to do so through the form below. I appreciate any and all
            feedback.
          </p>
        </div>
        <div class="Form">
          <label for="name">Name:</label>
          <input type="text" name="Name" id="name" />
          <label for="email">Email:</label>
          <input type="text" name="Email" id="email" />
          <label for="phone">Phone:</label>
          <input type="text" name="Phone" id="phone" />
          <label for="message" id="messagelabel">Message:</label>
          <textarea name="Message" id="message" rows="5"></textarea>
          <button>Send</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
  export default {
    name: "ContactForm",
    data() {
      return {
        isFormVisible: false,
      };
    },
    methods: {
      openModal() {
        this.isFormVisible = true;
      },
      closeModal() {
        this.isFormVisible = false;
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    position: relative;
    background: white;
    width: fit-content;
    height: fit-content;
    padding: 20px;
    border-radius: 20px;
    color: black;
  }

  .close-button {
    position: absolute;
    top: 30px; /* Adjust to your desired spacing */
    right: 20px; /* Adjust to your desired spacing */
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  .close-button span {
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: black;
    border-radius: 3px;
  }
  .close-button span:first-child {
    transform: rotate(45deg);
  }
  .close-button span:last-child {
    transform: rotate(-45deg);
  }

  .FormHeader {
    text-align: center;
  }

  .FormHeader h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
  }

  .FormHeader p {
    font-size: 1em;
    color: #555;
  }

  .Form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .Form label {
    font-weight: bold;
  }

  .Form input,
  .Form textarea {
    width: inherit;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: none;
  }

  .Form button {
    padding: 10px 15px;
    font-size: 1em;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .Form button:hover {
    background-color: #0056b3;
  }
</style>
