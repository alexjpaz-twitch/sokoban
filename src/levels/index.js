const levels = [];

levels.push(`
#######
#.@ # #
#$* $ #
#   $ #
# ..  #
#  *  #
#######
`);

levels.push(`
  #####
###   #
#.@$  #
### $.#
#.##$ #
# # . ##
#$ *$$.#
#   .  #
########
`);

levels.push(`
        ####
########  ##
#          ###
# @$$ ##   ..#
# $$   ##  ..#
#         ####
###########
`);

levels.push(`
       #####
  #####   #####
  #           #
  #  ### ###  #
#### #     # ####
#    #  *  #    #
# $  # *+*      #
#    #  *  #    #
#### #     # ####
  #  ### ###  #
  #           #
  #####   #####
      #####
`);

levels.push(`
#####
#   ###
#     #
# # # #
# # # #
#+$ # #
#     #
#######
`);

const getRandomLevel = () => {
  let level  = levels[Math.floor(Math.random() * levels.length)];
  return level;
};

module.exports = {
  levels,
  getRandomLevel
};
