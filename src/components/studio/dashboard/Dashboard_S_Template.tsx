import Dashboard_C_Template_Card from "@/components/studio/dashboard/Dashboard_C_Template_Card";
import { templates } from "@/constants/studio/templates";
import { use_Dashboard_Store } from "@/store/studio/Dashboard_Store";
import Dashboard_S_User_Templates from "./Dashboard_S_User_Templates";
import Dashboard_C_Section_Heading from "./Dashboard_C_Section_Heading";

const Dashboard_S_Template = ({
  params,
}: {
  params?: {
    userId: string;
  };
}) => {
  const ActiveMenu = use_Dashboard_Store((s) => s.ActiveMenu);
  const SearchQuery = use_Dashboard_Store((s) => s.SearchQuery);
  return (
    <>
      {SearchQuery !== "" ? (
        <div className="h-full w-full overflow-y-scroll p-6">
          <Dashboard_C_Section_Heading
            heading={`Showing result of : ${SearchQuery}`}
            subHeading="Searching..."
          />
          <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
            {templates
              .filter((x) => {
                const regex = new RegExp(SearchQuery, "i");
                return (
                  regex.test(x.title) ||
                  regex.test(x.description) ||
                  regex.test(x.type)
                );
              })
              .map((y) => (
                <Dashboard_C_Template_Card id={y.id} key={y.id} img={y.img} />
              ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Dashboard */}

          {ActiveMenu === "Dashboard" ? (
            <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
              <Dashboard_C_Section_Heading
                heading="Most Use Portfolio Templates"
                subHeading="Trending"
              />

              <div className="mb-[24px] mt-[24px] flex items-center justify-start gap-[34px] overflow-x-scroll">
                {templates
                  .filter((x) => x.type === "Portfolio")
                  .map((y) => (
                    <Dashboard_C_Template_Card
                      id={y.id}
                      key={y.id}
                      img={y.img}
                    />
                  ))}
              </div>

              <Dashboard_C_Section_Heading
                heading="Social Media Templates"
                subHeading="Peoples Favourite"
              />
              <div className="mb-[24px] mt-[24px] flex items-center justify-start gap-[34px] overflow-x-scroll">
                {templates
                  .filter((x) => x.type === "Social-Media")
                  .map((y) => (
                    <Dashboard_C_Template_Card
                      id={y.id}
                      key={y.id}
                      img={y.img}
                    />
                  ))}
              </div>

              <Dashboard_C_Section_Heading
                heading="Best E-Commerce Templates"
                subHeading="Web-Weaver Hand Pick"
              />
              <div className="mb-[24px] mt-[24px] flex items-center justify-start gap-[34px] overflow-x-scroll">
                {templates
                  .filter((x) => x.type === "E-Commerce")
                  .map((y) => (
                    <Dashboard_C_Template_Card
                      id={y.id}
                      key={y.id}
                      img={y.img}
                    />
                  ))}
              </div>
            </div>
          ) : (
            <div>
              {/* Your - Templates  */}

              {ActiveMenu === "Your-Template" && (
                // (templates.filter((x) => x.type === "Your-Template").length ===
                // 0 ? (
                //   <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                //     <Section_Heading heading="No Templates Found" />
                //   </div>
                // ) : (
                //   <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                //     <Section_Heading
                //       heading="Recently Edited Template"
                //       subHeading="Your Template"
                //     />
                //     <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                //       {templates
                //         .filter((x) => x.type === "Your-Template")
                //         .map((y) => (
                //           <Dashboard_C_Template_Card
                //             id={y.id}
                //             key={y.id}
                //             img={y.img}
                //           />
                //         ))}
                //     </div>
                //   </div>
                // ))
                <Dashboard_S_User_Templates />
              )}

              {/* E-Commerce */}

              {ActiveMenu === "E-Commerce" &&
                (templates.filter((x) => x.type === "E-Commerce").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best E-Commerce Templates For You"
                      subHeading="E-Commerce"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "E-Commerce")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Health-Care */}

              {ActiveMenu === "Health-Care" &&
                (templates.filter((x) => x.type === "Health-Care").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Health Care Templates For You"
                      subHeading="Health Care"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Health-Care")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Social-Media */}

              {ActiveMenu === "Social-Media" &&
                (templates.filter((x) => x.type === "Social-Media").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Social Media Templates For You"
                      subHeading="Social Media"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Social-Media")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Portfolio */}

              {ActiveMenu === "Portfolio" &&
                (templates.filter((x) => x.type === "Portfolio").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Portfolio Templates For You"
                      subHeading="Portfolio"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Portfolio")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Travelling */}

              {ActiveMenu === "Travelling" &&
                (templates.filter((x) => x.type === "Travelling").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Travelling Templates For You"
                      subHeading="Travelling"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Travelling")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Gym */}

              {ActiveMenu === "Gym" &&
                (templates.filter((x) => x.type === "Gym").length === 0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Gym Templates For You"
                      subHeading="Gym"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Gym")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Photography */}

              {ActiveMenu === "Photography" &&
                (templates.filter((x) => x.type === "Photography").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Photography Templates For You"
                      subHeading="Photography"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Photography")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Construction */}

              {ActiveMenu === "Construction" &&
                (templates.filter((x) => x.type === "Construction").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Construction Templates For You"
                      subHeading="Construction"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Construction")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Service */}

              {ActiveMenu === "Service" &&
                (templates.filter((x) => x.type === "Service").length === 0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Service Templates For You"
                      subHeading="Service"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Service")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}

              {/* Education */}

              {ActiveMenu === "Education" &&
                (templates.filter((x) => x.type === "Education").length ===
                0 ? (
                  <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading heading="No Templates Found" />
                  </div>
                ) : (
                  <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
                    <Dashboard_C_Section_Heading
                      heading="Best Education Templates For You"
                      subHeading="Education"
                    />
                    <div className="mb-[24px] mt-[24px] grid grid-cols-3 gap-[34px]">
                      {templates
                        .filter((x) => x.type === "Education")
                        .map((y) => (
                          <Dashboard_C_Template_Card
                            id={y.id}
                            key={y.id}
                            img={y.img}
                          />
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Dashboard_S_Template;
