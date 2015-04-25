# RealHack Submission



##Based on the problem statement, we have realized that usability of the idea takes precedence over the technology used.


##The idea -
# We propose crowdsourcing data (with validation) across multiple categories (eg. Proximity to schools, hospitals, recreational areas, emergency services etc) and algorithmically rating all property sites based on these parameters. This would also include marking proposed sites with upcoming dates and factoring them into these calculations.
# Using weighted values for each of the above parameters, we calculate the 'score' for each of the property.
# In addition to the above, we allow the users tweak the weights based on their personal preferences, and recalculate the score for each property.
# Based on the amount of time the user intends to use the property for (investment or occupation), we would sort the properties based on the projected score at the time of occupation, or the difference between the projected scores between the time of buying and selling.


##The general approach to the implementation of our solution is -
# Build an Android application with minimal on-device processing.
# MEAN stack with a socket implementation using SailsJS is used for the implementation of logic.Docker is used for demo/deployment.
# Interaction between the Android application and other components is to be done through web service responses. This integration is managed through the Android application.
# Focus would also lie on algorithms to present a feasible recommendation to the user.

