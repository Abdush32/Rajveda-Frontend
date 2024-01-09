import React from "react";
import { Container } from "reactstrap";

const Index = () => {
  return (
    <Container>
        <div className="mt-4 mb-5">
      <h4>Shipping Policy</h4>
      <div className="mt-3">
        <strong>SHIPPING ADDRESS</strong>
        <p className="mt-2">
          In order to provide good service and timely and efficient deliveries,
          please enter the correct pin code in the shipping address field of the
          Registration Form. Also, it is very important for us to have your
          contact number, so please enter your correct phone number while
          registering.
        </p>
      </div>
      <div>
        <strong>DELIVERY IN INDIA</strong>
        <p className="mt-2">
          The estimated time of delivery within India is generally 5-7 business
          days, time may vary according to your delivery location. Please note
          that if your location is not served by our regular courier partners,
          then we will be dispatching your order through Value Payable Post
          (VPP) or Speed Post. In such cases, delivery duration may vary from
          7-10 days. Delivery time may also vary according to your delivery
          location. Orders placed from North East India require a minimum of
          10-12 business days for delivery.
        </p>
      </div>
      <div>
        <strong>INTERNATIONAL DELIVERY</strong>
        </div>
        <ol className="international_delivery mt-2">
        <li>
          {" "}
          International deliveries may take 15-20 days. The tracking of your
          order gets updated periodically to provide the most current status of
          the shipment. There may be a delay between scanning events and the
          availability of tracking information related to those scanning events.
          Depending on how recently your item was mailed, tracking information
          may not be immediately available.
        </li>
      <li className="mt-1">
        {" "}
        Flight delays, cancellations, and customs delays are beyond our control.
        Due to the time required for custom and import clearance and forwarding
        delivery timeline may suffer. Please note that the delivery timings will
        also be bound by the custom policies and regulations of your region.
      </li>
      <li  className="mt-1">
        Additional charges for customs clearance of the shipment, if any, shall
        be paid by the recipient. Rajveda Life has no control over these
        charges, nor can we predict what they may be. In rare cases, you may
        have to coordinate with customs or the local post office for the
        clearance of the shipment. In such cases, we will keep you informed with
        all relevant information.
      </li>
      <li  className="mt-1">
        In rare cases, you may have to coordinate with customs, or local post
        office for the clearance of the shipment. In such case, we will keep you
        informed with all relevant information.
      </li>
      </ol>

      <p>Refund, Return, Cancellation, and Modification</p>

      <p>
        <strong>RETURN : </strong>Returns are acceptable with replacement of the
        products or reversal of the full amount paid by the customer within 7
        days of receipt of the product. However, returns are limited to the
        following cases:
      </p>
      <p>
        <strong> 1. In case of damaged or defective products : </strong> Do not
        worry, if upon delivery of the product, you find that the product is
        received in damaged condition immediately notify our Customer Care team
        at <a href="tel:+919710862222">+91 971-086-2222</a> or{" "}
        <a href="mailto:info@rajveda.com">info@rajveda.com</a>, we will refund
        or send a replacement product, depending on your preference after
        necessary verification. The contents of your shipment and the original
        packing must be returned along with damaged or defective products.
      </p>
      <p>
        <strong> 2. In case of a different product dispatched : </strong> Do not
        worry, if upon delivery of the product, you discover that we have
        dispatched a different product, immediately notify our Customer Care
        team at <a href="tel:+919710862222">+91 971-086-2222</a> or{" "}
        <a href="mailto:info@rajveda.com">info@rajveda.com</a>. We will refund
        or send a replacement product, depending on your preference. The
        contents of your shipment and the original packing must be returned
        along with the products.
      </p>

      <p>
        <strong>CANCELLATION : </strong>
        Cancellations are allowed without any question asked. However, it is
        allowed only until the time the product is not shipped from our
        warehouses. Please contact our Customer Care team immediately at{" "}
        <a href="tel:+919710862222">+91 971-086-2222</a> or{" "}
        <a href="mailto:info@rajveda.com">info@rajveda.com</a> to assist you in
        the cancellation of the order.
      </p>

      <p>
        <strong>REFUND : </strong>
        We will initiate your refund within 3 working days of our confirmation.
        However, it may take 7-15 working days to get it credited / reflected in
        your bank or credit card account statement as this involves inter-bank
        refund procedures which may take time. 
      </p>

      <p>
        *Rajveda reserve the right to change or update above policy at any time
        by placing a notice on the website. Such changes or updated shall be
        effective immediately upon posting to the website. *In case of a
        technical glitch while placing the order, Rajveda reserves all rights in
        its sole discretion to cancel or reject an order. *Rajveda deserves all
        rights to reject any orders placed without assigning any reason.
      </p>
      </div>
    </Container>
  );
};

export default Index;
