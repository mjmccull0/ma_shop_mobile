# ma_shop_mobile

An Android mobile application created with react native, to demonstrate coding abilities to a potential employer.  This readme file is intended to explain what I did, why I did it, and what the strengths and limitations are for the project.

# Requirements
 * create an Android application with JavaScript or React Native
 * use at least 2 of the designated APIs in the application
 * use at least one native feature of the phone
 * style the application beyond base styling

# Deliverables
 * apk file or source code in a publicly accessible repository
 * documentation on what I did, why I did it, and resulting strengths and limitations

The project is primarily structured into views, components, services and utilities.  The entry point for the application (App.js) is responsible for global theme styling and navigation between different views.  A view manages navigation between the its different components.  Components are the building blocks of views.  Views and components use services to request data from APIs.

There are two views, a home view and a category view.  While both views leverage the products API to present a product list—the category view enables filtering of products based on categories.  After navigating to a category's sub-categories it's possible to go back to the parent category using the the back button contained in the view or using the phones hardware button (native feature).

![](https://github.com/mjmccull0/ma_shop_mobile/blob/master/screenshots/product_list.png)

![](https://github.com/mjmccull0/ma_shop_mobile/blob/master/screenshots/category_list.png)

![](https://github.com/mjmccull0/ma_shop_mobile/blob/master/screenshots/category_product_list.png)


Material design elements and themes are used for styling the application.  The default dark theme is the basis for the theme, further customization of the theme can be configured in App.js.

# Strengths and Limitations
The code structure allows for a reasonable mental model and supports nested navigation, navigating between views and within views.  Creating services for API calls results in simpler views and components.

The limitations of this project stem from the project being a code sample.  Some features which would have been included if I had the time: 
 * infinite scrolling for product list
 * sharing functionality for products
 * add ability to customize the categories shown
 * styling for larger screens
 * handle HTML entities

The [apk](https://github.com/mjmccull0/ma_shop_mobile/blob/master/dist/mobile-dev-assessment.apk) for available in the dist directory.
