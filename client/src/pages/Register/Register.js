import React, { useEffect } from "react";

const Register = () => {
  const embedForm = () => {
    window.EmbedManager.embed({
      key: "https://fs9.formsite.com/res/showFormEmbed?EParam=jFMIig1ZP557Klu2bBVhwtt7h1SghSJ6&1832948506",
      width: "100%",
      mobileResponsive: true,
    });
  };
  useEffect(() => {
    embedForm();
    return () => window.removeEventListener("message", embedForm);
  }, []);

  return (
    <div className="p-24 mx-auto w-3/4">
      <a name="form1832948506" id="formAnchor1832948506"></a>
    </div>
  );
};

export default Register;
