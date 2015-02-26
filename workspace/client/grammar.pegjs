start
 = _ from:date _ "-" _ to:date _   { return {start:from, end:to } }
 / _ d:date _                      { return {start: d.clone().startOf('month'), end:d.clone().endOf('month') } }

date
 = y:year [./] m:DIG2 [./] d:DIG2  { return moment({year:y,month:m-1, day:d}) }
 / y:year [./] m:DIG2              { return moment({year:y,month:m-1}) }
 / m:DIG2                          { return moment({month:m-1}) }

year = d4:DIG d3:DIG d2:DIG d1:DIG { return d4*1000 + d3*100 + d2*10 + d1 }

DIG2
 = d10:DIG d1:DIG                  { return d10*10 + d1 }
 / DIG

DIG = d:[0-9]                      { return parseInt(d) }

_ = [ \t]*
