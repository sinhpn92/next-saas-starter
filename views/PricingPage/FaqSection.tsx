import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <Accordion title="What is Blitzbuild and how can it benefit my business?">
        Blitzbuild is a low-code platform that enables developers to create powerful ERP, CRM, and management systems with ease. It provides an intuitive drag-and-drop interface, a robust workflow engine, and seamless integration capabilities, allowing businesses to streamline their processes, increase productivity, and achieve their goals faster.
      </Accordion>
      <Accordion title="Do I need programming experience to use Blitzbuild?">
        While some programming knowledge is beneficial, Blitzbuild is designed to be user-friendly and accessible to users with varying levels of technical expertise. The platform provides visual tools and pre-built components that make it easy to create applications without writing extensive code. However, developers can also leverage their programming skills to extend and customize the applications further.
      </Accordion>
      <Accordion title="Can Blitzbuild integrate with my existing systems and tools?">
        Yes, Blitzbuild offers seamless integration capabilities, allowing you to connect your applications with various existing systems and tools. Whether you need to integrate with databases, APIs, or other software, Blitzbuild provides the necessary connectors and integration options to ensure smooth data flow and interoperability.
      </Accordion>
      <Accordion title="How secure and scalable are the applications built with Blitzbuild?">
        Security and scalability are top priorities for Blitzbuild. The platform incorporates enterprise-grade security measures, including data encryption, user authentication, and access controls, to ensure the protection of your sensitive information. Additionally, applications built with Blitzbuild are designed to scale effortlessly, accommodating your business growth and increasing demands without compromising performance.
      </Accordion>
      <Accordion title="What kind of support and resources are available for Blitzbuild users?">
        Blitzbuild offers comprehensive support and resources to help you succeed. Our dedicated support team is available to assist you with any questions or issues you may encounter. We also provide extensive documentation, tutorials, and a community forum where you can connect with other Blitzbuild users, share knowledge, and learn from their experiences. Additionally, we offer training and consulting services to help you make the most out of the platform.
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
