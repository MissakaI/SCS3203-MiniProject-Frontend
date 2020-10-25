package lk.ac.cmb.ucsc.scs3203.miniproject.frontend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;
import org.springframework.web.servlet.view.UrlBasedViewResolver;

@SpringBootApplication
public class MiniProjectFrontend {

    public static void main(String[] args) {
        SpringApplication.run(MiniProjectFrontend.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
//            @Override
//            public void addResourceHandlers(ResourceHandlerRegistry registry) {
//                registry
//                        .addResourceHandler("/assets/**")
//                        .addResourceLocations("/assets/");
//            }

//            @Override
//            public void configureViewResolvers(ViewResolverRegistry registry) {
//                UrlBasedViewResolver resolver
//                        = new UrlBasedViewResolver();
//                resolver.setPrefix("/WEB-INF/view/");
//                resolver.setSuffix(".jsp");
//                resolver.setViewClass(JstlView.class);
//                registry.viewResolver(resolver);
//            }
        };
    }

//    @Bean
//    public UrlBasedViewResolver viewResolver() {
//        UrlBasedViewResolver resolver
//                = new UrlBasedViewResolver();
//        resolver.setPrefix("/WEB-INF/view/");
//        resolver.setSuffix(".jsp");
//        resolver.setViewClass(JstlView.class);
//        return resolver;
//    }
}
