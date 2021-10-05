import React, { useEffect } from "react";

const weeks = [
  { week: 'Week One', unit: 'Basics of Web Development - HTML, CSS and Git' },
  { week: 'Week Two', unit: 'Animation and CSS Libraries, Developing Interactive Sites - JavaScript, Bootstrap' },
  { week: 'Week Three', unit: 'Advanced JavaScript and ' },
  { week: 'Week Four', unit: 'Making HTTP requests with JavaScript, Utilizing Externl APIs in Web Development - JavaScript' },
  { week: 'Week Five', unit: 'Developing Persistent Websites - Google Firebase, Node.js' },
  { week: 'Week Six', unit: 'Server and API Endpoint Creation - Express.js' },
  { week: 'Week Seven', unit: 'Non-Relational Database - MongoDB' },
  { week: 'Week Eight', unit: 'JavaScript Frameworks - React Basics' },
  { week: 'Week Nine', unit: 'Advanced React Hooks and State Management with Redux' },
]

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
    <div className="pt-20 mx-auto w-full lg:w-2/3">
      <div className="flex flex-col">

        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200">
                <p className="p-4 bg-gray-50">
                  Price Stuff LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                  Price Stuff LOREM LOREM LOREM LOREM LOREM LOREM LOREM
                </p>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Week
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {weeks.map((week, weekIndx) => (
                    <tr key={week.week} className={weekIndx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{week.week}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{week.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <a name="form1948865317" id="formAnchor1948865317"></a>{" "}
    </div>
  );
};

export default FormSite;
