import React, { useEffect } from "react";

const FormSite = () => {
  const embedForm = () => {
    window.EmbedManager.embed({
      key: "https://fs26.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTASBU8K-Mte1yJ-zpXHYORbFzpUCZwnDno&1948865317",
      width: "100%",
      mobileResponsive: true,
    });
  };
  useEffect(() => {
    embedForm();
    return () => window.removeEventListener("message", embedForm);
  }, []);

  return (
    <div className="xl:p-20 pt-20 mx-auto w-full lg:w-2/3">
      <a name="form1948865317" id="formAnchor1948865317"></a>{" "}
    </div>
  );
};

export default FormSite;
