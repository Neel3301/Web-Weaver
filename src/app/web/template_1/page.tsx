"use client";
import Btn from "@/components/utils/Btn";
import Div from "@/components/utils/Div";
import Icon from "@/components/utils/Icon";
import Image from "@/components/utils/Image";
import Text from "@/components/utils/Text";

const Template_1 = () => {
  return (
    <>
      {/***************************** Header ********************************/}
      <Div
        cId="T1-header"
        width={"100vw"}
        bgColor="#ffffff"
        padT={16}
        padB={16}
        classname="flex justify-between items-center !px-4 sm:!px-8 lg:!px-12"
      >
        <Image
          cId={"T1-header-logo"}
          img={"/T1/Logo.png"}
          height={30}
          width={160}
        />
        <Div
          cId="T1-header-nav"
          classname="justify-center gap-2 md:gap-4 hidden sm:flex"
        >
          <Btn
            cId="T1-header-nav-home"
            fontSize={16}
            textColor="#000000"
            link="#"
            bgColor="#FFFFFF"
            borderColor="transparent"
            hoverBgColor="transparent"
            hoverBorderColor="transparent"
            hoverTextColor="#5E3BEE"
          >
            Home
          </Btn>
          <Btn
            cId="T1-header-nav-portfolio"
            fontSize={16}
            textColor="#000000"
            link="#portfolio"
            bgColor="#FFFFFF"
            borderColor="transparent"
            hoverBgColor="transparent"
            hoverBorderColor="transparent"
            hoverTextColor="#5E3BEE"
          >
            Portfolio
          </Btn>
          <Btn
            cId="T1-header-nav-about-me"
            fontSize={16}
            textColor="#000000"
            link="#about-me"
            bgColor="#FFFFFF"
            borderColor="transparent"
            hoverBgColor="transparent"
            hoverBorderColor="transparent"
            hoverTextColor="#5E3BEE"
          >
            About Me
          </Btn>
          <Btn
            cId="T1-header-nav-testimonials"
            fontSize={16}
            textColor="#000000"
            link="#testimonials"
            bgColor="#FFFFFF"
            borderColor="transparent"
            hoverBgColor="transparent"
            hoverBorderColor="transparent"
            hoverTextColor="#5E3BEE"
          >
            Testimonials
          </Btn>
        </Div>
        <Btn
          cId="T1-header-contact-me"
          textColor="#5E3BEE"
          fontSize={16}
          bgColor="transparent"
          borderColor="#5E3BEE"
          hoverBgColor="#5E3BEE"
          hoverTextColor="#FFFFFF"
          hoverBorderColor="#5E3BEE"
          borderRadiusBl={4}
          borderRadiusBr={4}
          borderRadiusTr={4}
          borderRadiusTl={4}
          classname="hidden sm:flex"
        >
          Contect
        </Btn>
        <Div
          cId="T1-header-menu-div"
          width={"w-fit"}
          classname="block sm:hidden"
        >
          <Icon cId="T1-header-menu" icon="Menu" iconColor="#000000" />
        </Div>
      </Div>
      {/********************************** Hero *********************************/}
      <Div
        cId="T1-hero"
        bgColor="#F5FCFF"
        width={"100vw"}
        padT={96}
        padB={96}
        classname="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center !px-4 md:!px-8 lg:!px-12"
      >
        <Div cId="T1-hero-text">
          <Text cId="T1-hero-text-name" fontSize={16} fontWeight={600}>
            Hey, I am John
          </Text>
          <Div cId="T1-hero-text-main" padB={12}>
            <Text
              cId="T1-hero-text-one"
              classname="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-semibold"
            >
              I create
            </Text>{" "}
            <Text
              cId="T1-hero-text-two"
              textColor="#5E3BEE"
              classname="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-semibold"
            >
              product design
            </Text>{" "}
            <Text
              cId="T1-hero-text-three"
              classname="!text-2xl sm:!text-3xl md:!text-4xl lg:!text-5xl !font-semibold"
            >
              and brand experience
            </Text>
          </Div>
          <Text cId="T1-hero-text-description" fontSize={16}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            necessitatibus tempore sit sint distinctio et iste quo assumenda eos
            pariatur.
          </Text>
        </Div>
        <Div
          cId="T1-hero-image-div-md"
          classname="justify-center items-center hidden md:flex"
        >
          <Image
            cId="T1-hero-image-md"
            img="/T1/hero-image.png"
            height={365}
            width={459}
          />
        </Div>
        <Div
          cId="T1-hero-image-div-sm"
          classname="lg:hidden sm:flex justify-center items-center"
        >
          <Image
            cId="T1-hero-image-sm"
            img="/T1/hero-image.png"
            height={243}
            width={306}
          />
        </Div>
      </Div>
      {/******************************** Skills ******************************/}
      <Div
        cId="T1-skills-div"
        bgColor="#FFFFFF"
        padT={96}
        padB={96}
        classname="!px-4 md:!px-8 lg:!px-12"
      >
        <Div cId="T1-skills-text" classname="flex flex-col">
          <Text cId="T1-skills-text-one" classname="!text-xs !font-semibold">
            My Skills
          </Text>
          <Text
            cId="T1-skills-text-two"
            classname="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl !font-semibold"
          >
            My Expertise
          </Text>
        </Div>
        <Div
          cId="T1-skills-cards"
          padT={16}
          classname="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Div
            cId="T1-skills-card-one"
            bgColor="#F5FCFF"
            padB={16}
            padL={16}
            padR={16}
            padT={16}
            classname="flex flex-col gap-4 w-full"
          >
            <Div
              cId="T1-skills-card-image-one"
              padB={8}
              padL={8}
              padR={8}
              padT={8}
              bgColor="#FFFFFF"
              classname="!w-fit"
            >
              <Image
                cId="strategy-n-direction"
                img="/T1/product-chain.png"
                height={32}
                width={32}
              />
            </Div>
            <Div cId="card-one-text" classname="flex flex-col !w-full">
              <Text cId="card-one-heading" classname="!text-xl !font-semibold">
                Strategy & Direction
              </Text>
              <Text cId="card-one-description" classname="!text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                dolore, quos incidunt quas voluptate iste.
              </Text>
            </Div>
          </Div>
          <Div
            cId="T1-skills-card-two"
            bgColor="#F5FCFF"
            padB={16}
            padL={16}
            padR={16}
            padT={16}
            classname="flex flex-col gap-4 w-full"
          >
            <Div
              cId="T1-skills-card-image-two"
              padB={8}
              padL={8}
              padR={8}
              padT={8}
              bgColor="#FFFFFF"
              classname="!w-fit"
            >
              <Image
                cId="branding-n-logo"
                img="/T1/tag.png"
                height={32}
                width={32}
              />
            </Div>
            <Div cId="card-two-text" classname="flex flex-col !w-full">
              <Text cId="card-two-heading" classname="!text-xl !font-semibold">
                Branding & Logo
              </Text>
              <Text cId="card-two-description" classname="!text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                dolore, quos incidunt quas voluptate iste.
              </Text>
            </Div>
          </Div>
          <Div
            cId="T1-skills-card-three"
            bgColor="#F5FCFF"
            padB={16}
            padL={16}
            padR={16}
            padT={16}
            classname="flex flex-col gap-4 !w-full"
          >
            <Div
              cId="T1-skills-card-image-three"
              padB={8}
              padL={8}
              padR={8}
              padT={8}
              bgColor="#FFFFFF"
              classname="!w-fit"
            >
              <Image
                cId="ui-n-ux"
                img="/T1/feather-pen.png"
                height={32}
                width={32}
              />
            </Div>
            <Div cId="card-three-text" classname="flex flex-col !w-full">
              <Text
                cId="card-three-heading"
                classname="!text-xl !font-semibold"
              >
                UI & UX Design
              </Text>
              <Text cId="card-three-description" classname="!text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                dolore, quos incidunt quas voluptate iste.
              </Text>
            </Div>
          </Div>
          <Div
            cId="T1-skills-card-four"
            bgColor="#F5FCFF"
            padB={16}
            padL={16}
            padR={16}
            padT={16}
            classname="flex flex-col gap-4 w-full"
          >
            <Div
              cId="T1-skills-card-image-four"
              padB={8}
              padL={8}
              padR={8}
              padT={8}
              bgColor="#FFFFFF"
              classname="!w-fit"
            >
              <Image
                cId="webflow-development"
                img="/T1/webdev.png"
                height={32}
                width={32}
              />
            </Div>
            <Div cId="card-four-text" classname="flex flex-col !w-full">
              <Text cId="card-four-heading" classname="!text-xl !font-semibold">
                Webflow Development
              </Text>
              <Text cId="card-four-description" classname="!text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                dolore, quos incidunt quas voluptate iste.
              </Text>
            </Div>
          </Div>
        </Div>
      </Div>
      {/*********************** About Me ***************************/}
      <Div
        cId="T1-about-me"
        bgColor="#F5FCFF"
        width={"100vw"}
        padT={96}
        padB={96}
        classname="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center !px-4 md:!px-8 lg:!px-12"
      >
        <Div
          cId="T1-about-me-div-md"
          classname="justify-center items-center hidden md:flex"
        >
          <Image
            cId="T1-about-md"
            img="/T1/about-me.png"
            height={498}
            width={406}
          />
        </Div>
        <Div
          cId="T1-about-div-sm"
          classname="lg:hidden sm:flex justify-center items-center"
        >
          <Image
            cId="T1-about-sm"
            img="/T1/about-me.png"
            height={398}
            width={325}
          />
        </Div>
        <Div cId="T1-about-text" classname="flex flex-col gap-2">
          <Text cId="T1-about-heading" fontSize={12} fontWeight={600}>
            About
          </Text>
          <Text
            cId="T1-about-sub-heading"
            classname="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl !font-semibold"
          >
            About Me
          </Text>
          <Text cId="T1-about-description-1" fontSize={16}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            deleniti voluptatibus illo perspiciatis dolores ipsam aliquid
            reprehenderit qui consectetur. Cupiditate omnis temporibus
            doloremque error ducimus porro voluptatem quasi sit recusandae
          </Text>
          <Text cId="T1-about-description-2" fontSize={16}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            necessitatibus tempore sit sint distinctio et iste quo assumenda eos
            pariatur.
          </Text>
        </Div>
      </Div>
      {/*********************************** Portfolio **********************************/}
      <Div
        cId="T1-portfolio"
        bgColor="#FFFFFF"
        padT={96}
        padB={96}
        classname="!px-4 md:!px-8 lg:!px-12"
      >
        <Div
          cId="T1-portfolio-one"
          classname="flex justify-between items-center"
        >
          <Div cId="T1-portfolio-text" classname="flex flex-col">
            <Text cId="T1-portfolio-sub-heading" fontSize={12} fontWeight={600}>
              Recent Projects
            </Text>
            <Text
              cId="T1-portfolio-heading"
              classname="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl !font-semibold"
            >
              My Portfolio
            </Text>
          </Div>
          <Btn
            cId="T1-portfolio-link"
            icon="Dribbble"
            textColor="#FFFFFF"
            fontSize={14}
            padX={16}
            padY={8}
            bgColor="#E62872"
            borderRadiusBl={4}
            borderRadiusBr={4}
            borderRadiusTl={4}
            borderRadiusTr={4}
            hoverBorderColor="#E62872"
            hoverTextColor="#E62872"
            link="https://dribbble.com/"
            classname="min-w-fit"
          >
            Visit My Dribbble
          </Btn>
        </Div>
        <Div
          cId="T1-portfolio-cards"
          padT={32}
          classname="grid gap-4 md:gap-0 grid-cols-1 md:grid-cols-3"
        >
          <Div cId="portfolio-card-one" classname="grid place-items-center">
            <Image
              cId="card-one-image"
              img="/T1/project-1.png"
              height={216}
              width={300}
            />
            <Div
              cId="portfolio-card-one-text"
              bgColor="#F5FCFF"
              width={300}
              classname="flex flex-col gap-2 !h-fit !p-4"
            >
              <Text
                cId="portfolio-card-one-heading"
                fontWeight={600}
                fontSize={20}
              >
                Ahuse
              </Text>
              <Text cId="portfolio-card-one-description" fontSize={12}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </Text>
              <Btn
                cId="card-one-button"
                icon="ArrowUpRight"
                link="https://dribbble.com/"
                bgColor="#F5FCFF"
                borderColor="#F5FCFF"
                fontSize={12}
                fontWeight={600}
                padX={0}
                hoverBorderColor="#FFFFFF"
                hoverTextColor="#5E3BEE"
                hoverBgColor="#F5FCFF"
              >
                View in Dribbble
              </Btn>
            </Div>
          </Div>
          <Div cId="portfolio-card-two" classname="grid place-items-center">
            <Image
              cId="card-two-image"
              img="/T1/project-2.png"
              height={216}
              width={300}
            />
            <Div
              cId="portfolio-card-two-text"
              bgColor="#F5FCFF"
              width={300}
              classname="flex flex-col gap-2 !h-fit !p-4"
            >
              <Text
                cId="portfolio-card-two-heading"
                fontWeight={600}
                fontSize={20}
              >
                App Deshboard
              </Text>
              <Text cId="portfolio-card-two-description" fontSize={12}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </Text>
              <Btn
                cId="card-two-button"
                icon="ArrowUpRight"
                link="https://dribbble.com/"
                bgColor="#F5FCFF"
                borderColor="#F5FCFF"
                fontSize={12}
                fontWeight={600}
                padX={0}
                hoverBorderColor="#FFFFFF"
                hoverTextColor="#5E3BEE"
                hoverBgColor="#F5FCFF"
              >
                View in Dribbble
              </Btn>
            </Div>
          </Div>
          <Div cId="portfolio-card-three" classname="grid place-items-center">
            <Image
              cId="card-three-image"
              img="/T1/project-3.png"
              height={216}
              width={300}
            />
            <Div
              cId="portfolio-card-three-text"
              bgColor="#F5FCFF"
              width={300}
              classname="flex flex-col gap-2 !h-fit !p-4"
            >
              <Text
                cId="portfolio-card-three-heading"
                fontWeight={600}
                fontSize={20}
              >
                Easy Rent
              </Text>
              <Text cId="portfolio-card-three-description" fontSize={12}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                tempora.
              </Text>
              <Btn
                cId="card-three-button"
                icon="ArrowUpRight"
                link="https://dribbble.com/"
                bgColor="#F5FCFF"
                borderColor="#F5FCFF"
                fontSize={12}
                fontWeight={600}
                padX={0}
                hoverBorderColor="#FFFFFF"
                hoverTextColor="#5E3BEE"
                hoverBgColor="#F5FCFF"
              >
                View in Dribbble
              </Btn>
            </Div>
          </Div>
        </Div>
      </Div>
      {/************************************* Customer Testimonials *************************************/}
      <Div
        cId="T1-customer-testimonials"
        bgColor="#FFFFFF"
        padT={96}
        padB={96}
        classname="!px-4 md:!px-8 lg:!px-12"
      >
        <Div cId="T1-customer-testimonials-text" classname="flex flex-col">
          <Text
            cId="T1-customer-testimonials-sub-heading"
            fontSize={12}
            fontWeight={600}
          >
            Client Feedback
          </Text>
          <Text
            cId="T1-customer-testimonials-heading"
            classname="!text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl !font-semibold"
          >
            Customer Testimonials
          </Text>
        </Div>
        <Div
          cId="T1-customer-testimonials-cards"
          padT={24}
          classname="grid grid-cols-1 lg:grid-cols-3 gap-4"
        >
          <Div
            cId="T1-customer-testimonials-card-one"
            bgColor="#F5FCFF"
            classname="!p-6 flex flex-col gap-4"
          >
            <Image
              cId="T1-customer-testimonials-card-one-image"
              img="/T1/Stars.png"
              width={103}
              height={17}
            />
            <Text
              cId="T1-customer-testimonials-card-one-description"
              fontSize={12}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa
              voluptatibus cupiditate officia ea quod dolor, blanditiis neque.
            </Text>
            <Div
              cId="T1-customer-testimonials-card-one-client"
              classname="flex items-center gap-2 !min-w-fit"
            >
              <Image
                cId="T1-customer-testimonials-card-one-client-image"
                img="/T1/Avatar-1.png"
                width={36}
                height={36}
              />
              <Div
                cId="T1-customer-testimonials-card-one-client-details"
                classname="flex flex-col"
              >
                <Text
                  cId="T1-customer-testimonials-card-one-client-name"
                  fontWeight={600}
                  fontSize={14}
                >
                  Dianne Russell
                </Text>
                <Text
                  cId="T1-customer-testimonials-card-one-client-designation"
                  fontSize={12}
                >
                  Starbucks
                </Text>
              </Div>
            </Div>
          </Div>
          <Div
            cId="T1-customer-testimonials-card-two"
            bgColor="#F5FCFF"
            classname="!p-6 flex flex-col gap-4"
          >
            <Image
              cId="T1-customer-testimonials-card-two-image"
              img="/T1/Stars.png"
              width={103}
              height={17}
            />
            <Text
              cId="T1-customer-testimonials-card-two-description"
              fontSize={12}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa
              voluptatibus cupiditate officia ea quod dolor, blanditiis neque.
            </Text>
            <Div
              cId="T1-customer-testimonials-card-two-client"
              classname="flex items-center gap-2 !min-w-fit"
            >
              <Image
                cId="T1-customer-testimonials-card-two-client-image"
                img="/T1/Avatar-2.png"
                width={36}
                height={36}
              />
              <Div
                cId="T1-customer-testimonials-card-two-client-details"
                classname="flex flex-col"
              >
                <Text
                  cId="T1-customer-testimonials-card-two-client-name"
                  fontWeight={600}
                  fontSize={14}
                >
                  Kristin Watson
                </Text>
                <Text
                  cId="T1-customer-testimonials-card-two-client-designation"
                  fontSize={12}
                >
                  Louis Vuitton
                </Text>
              </Div>
            </Div>
          </Div>
          <Div
            cId="T1-customer-testimonials-card-three"
            bgColor="#F5FCFF"
            classname="!p-6 flex flex-col gap-4"
          >
            <Image
              cId="T1-customer-testimonials-card-three-image"
              img="/T1/Stars.png"
              width={103}
              height={17}
            />
            <Text
              cId="T1-customer-testimonials-card-three-description"
              fontSize={12}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsa
              voluptatibus cupiditate officia ea quod dolor, blanditiis neque.
            </Text>
            <Div
              cId="T1-customer-testimonials-card-three-client"
              classname="flex items-center gap-2 !min-w-fit"
            >
              <Image
                cId="T1-customer-testimonials-card-three-client-image"
                img="/T1/Avatar-3.png"
                width={36}
                height={36}
              />
              <Div
                cId="T1-customer-testimonials-card-three-client-details"
                classname="flex flex-col"
              >
                <Text
                  cId="T1-customer-testimonials-card-three-client-name"
                  fontWeight={600}
                  fontSize={14}
                >
                  Kathryn Murphy
                </Text>
                <Text
                  cId="T1-customer-testimonials-card-three-client-designation"
                  fontSize={12}
                >
                  McDonald's
                </Text>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/********************************** Footer *************************************/}
      <Div
        cId="T1-footer"
        width={"100vw"}
        bgColor="#F5FCFF"
        padT={80}
        padB={80}
        classname="flex flex-col items-center gap-8 !px-4 sm:!px-8 lg:!px-12"
      >
        <Div cId="footer-one" classname="flex justify-between items-center">
          <Image
            cId={"T1-footer-logo"}
            img={"/T1/Logo.png"}
            height={30}
            width={160}
          />
          <Div cId="T1-footer-socials" classname="flex !w-fit">
            <Icon
              cId="facebook"
              icon="Facebook"
              link="https://www.facebook.com/"
              iconColor="#000000"
              hoverIconColor="#5E3BEE"
            />
            <Icon
              cId="linkedin"
              icon="Linkedin"
              link="https://www.linkedin.com/"
              iconColor="#000000"
              hoverIconColor="#5E3BEE"
            />
            <Icon
              cId="twitter"
              icon="Twitter"
              link="https://www.x.com/"
              iconColor="#000000"
              hoverIconColor="#5E3BEE"
            />
          </Div>
        </Div>
        <Text cId="footer-two" fontSize={16}>
          Made with 💖 by Vishal
        </Text>
      </Div>
    </>
  );
};

export default Template_1;
