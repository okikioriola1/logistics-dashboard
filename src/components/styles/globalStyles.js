import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  //SIDEBAR STYLES

  .sidebar{
    background: ${({ theme }) => theme.sidebar};
    transition: all 0.50s linear;
  }
  .sidebar-link-container p{
    color:${({ theme }) => theme.sidebar_text_color};
    transition: all 0.50s linear;

  }
  .sidebar-link-icon{
    color:${({ theme }) => theme.sidebar_icon_color};
    transition: all 0.50s linear;

  }
  //HOME STYLES
  .home-text h1{
    color:${({ theme }) => theme.home_text_h1_color};
    transition: all 0.50s linear;
  }
  .home-text p{
    color:${({ theme }) => theme.home_text_p_color};
    transition: all 0.50s linear;
  }
  .shipment-header h1{
    color:${({ theme }) => theme.shipment_header_h1_color};
    transition: all 0.50s linear;
  }
  .shipment-header P{
    color:${({ theme }) => theme.shipment_header_p_color};
    transition: all 0.50s linear;
  }
  .shipment-btns{
    background: ${({ theme }) => theme.shipment_btns_background};
    transition: all 0.50s linear;
  }

  .shipment-btns button{
    color:${({ theme }) => theme.shipment_button_color};
    transition: all 0.50s linear;

  }
  .charts-section{
    background: ${({ theme }) => theme.charts_section_background};
    transition: all 0.50s linear;
  }
  .feature-card-container{
    background: ${({ theme }) => theme.feature_card_container_background};
    transition: all 0.50s linear;
  }
  .feature-card-text h5{
    color:${({ theme }) => theme.feature_card_text_h5_color};
    transition: all 0.50s linear;   
  }

  .feature-card-text h1{
    color:${({ theme }) => theme.feature_card_text_h1_color};
    transition: all 0.50s linear;   
  }
  .feature-card-text p{
    color:${({ theme }) => theme.feature_card_text_p_color};
    transition: all 0.50s linear;   
  }
  .header-1 p,
  .header-2 p{
    color:${({ theme }) => theme.chart_header_p_color};
    transition: all 0.50s linear;  

  }
  .header-1 h1,
  .header-2 h1{
    color:${({ theme }) => theme.chart_header_h1_color};
    transition: all 0.50s linear;  

  } 
  //HEADER STYLES

  .notif-icon svg{
    color:${({ theme }) => theme.notif_icon_color};
    transition: all 0.50s linear;  
  }
  //VEHICLE STYLES
  .vehicle-text h1{
    color:${({ theme }) => theme.vehicle_text_h1_color};
    transition: all 0.50s linear; 

  }
  .vehicle-text p{
    color:${({ theme }) => theme.vehicle_text_p_color};
    transition: all 0.50s linear; 

  }
  .vehicle-container{
    background:${({ theme }) => theme.vehicle_container_background_color};
    transition: all 0.50s linear; 

  }
  .link h4{
    color:${({ theme }) => theme.vehicle_link_h4_color};
    transition: all 0.50s linear; 

  }
  .search-btn svg{
    color:${({ theme }) => theme.vehicle_search_btn_color};
    transition: all 0.50s linear; 

  }
  .vehicle-card-container{
    background:${({ theme }) => theme.vehicle_card_container_background_color};
    transition: all 0.50s linear;

  }
  .vehicle-card-text h1{
    color:${({ theme }) => theme.vehicle_card_text_h1_color};
    transition: all 0.50s linear; 
  }
  .vehicle-icon-truck svg{
    color:${({ theme }) => theme.vehicle_truck_icon_color};
    transition: all 0.50s linear; 

  }

  .vehicle-icon svg{
    color:${({ theme }) => theme.vehicle_icon_color};
    transition: all 0.50s linear; 

  }

  .vehicle-modal-inner-container{
    background:${({ theme }) => theme.vehicle_modal_container_background_color};
    transition: all 0.50s linear;

  }
  .close-modal-icon button{
    background:${({ theme }) => theme.vehicle_modal_close_icon_background_color};
    transition: all 0.50s linear;

  }
  .close-modal-icon svg{
    color:${({ theme }) => theme.vehicle_modal_close_icon_color};
    transition: all 0.50s linear; 
    
  }
  .close-modal-icon button{
    border:${({ theme }) => theme.vehicle_modal_close_icon_border_color};
    transition: all 0.50s linear; 
    
  }
  .top-vehicle-modal h1{
    color:${({ theme }) => theme.top_vehicle_modal_h1_color};
    transition: all 0.50s linear; 

  }
  .top-vehicle-modal p{
    color:${({ theme }) => theme.top_vehicle_modal_h1_color};
    transition: all 0.50s linear; 

  }
  .bottom-modal-text h1{
    color:${({ theme }) => theme.bottom_modal_h1_color};
    transition: all 0.50s linear; 

  }

  .bottom-modal-text p{
    color:${({ theme }) => theme.bottom_modal_p_color};
    transition: all 0.50s linear; 

  }

  .bottom-modal-icon svg{
    color:${({ theme }) => theme.bottom_modal_icon_color};
    transition: all 0.50s linear; 

  }

  .middle-modal-img-container-text h1{
    color:${({ theme }) => theme.middle_modal_h1_color};
    transition: all 0.50s linear; 
  }

  .middle-modal-img-container-text p{
    color:${({ theme }) => theme.middle_modal_p_color};
    transition: all 0.50s linear; 
  }

  .circle-3 svg{
    color:${({ theme }) => theme.middle_modal_icon_color};
    transition: all 0.50s linear; 

  }



  `

