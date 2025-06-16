export default function validateForms() {
  if (document.querySelector("#profile-form")) {
    const profileValidator = new JustValidate("#profile-form");

    profileValidator
      .addField("#profile-name", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("#profile-age", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("#profile-tel", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ]);
  }

  if (document.querySelector("#connect-form")) {
    const connectValidator = new JustValidate("#connect-form");

    connectValidator
      .addField("#connect-name", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("#connect-tel", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ]);
  }

  if (document.querySelector("#order-form")) {
    const orderValidator = new JustValidate("#order-form");

    orderValidator
      .addField("#order-name", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ])
      .addField("#order-tel", [
        {
          rule: "required",
          errorMessage: "Обязательное поле",
        },
      ]);
  }
}
