// Mock data for the LMS dashboard
export const courseStats = {
  total: 128,
  active: 98,
  draft: 30,
  popular: [{
    id: 1,
    name: "Introduction to Computer Science",
    students: 245,
    completion: 76
  }, {
    id: 2,
    name: "Advanced Mathematics",
    students: 187,
    completion: 68
  }, {
    id: 3,
    name: "Digital Marketing Fundamentals",
    students: 156,
    completion: 82
  }, {
    id: 4,
    name: "Business Ethics",
    students: 143,
    completion: 91
  }],
  categories: [{
    name: "Computer Science",
    courses: 32
  }, {
    name: "Business",
    courses: 28
  }, {
    name: "Mathematics",
    courses: 24
  }, {
    name: "Engineering",
    courses: 19
  }, {
    name: "Arts & Humanities",
    courses: 15
  }, {
    name: "Other",
    courses: 10
  }]
};
export const studentStats = {
  total: 2865,
  active: 2450,
  newThisMonth: 124,
  graduating: 312,
  demographics: {
    undergraduate: 1865,
    graduate: 720,
    phd: 280
  },
  performance: {
    excellent: 486,
    good: 1245,
    average: 834,
    belowAverage: 300
  }
};
export const assignmentStats = {
  total: 567,
  pending: 89,
  graded: 478,
  lateSubmissions: 34,
  averageScore: 76,
  submissionTrend: [65, 68, 72, 75, 79, 80, 76, 78, 82, 85, 87, 84]
};
export const analyticsData = {
  courseCompletionRate: [{
    month: "Jan",
    rate: 68
  }, {
    month: "Feb",
    rate: 72
  }, {
    month: "Mar",
    rate: 75
  }, {
    month: "Apr",
    rate: 76
  }, {
    month: "May",
    rate: 78
  }, {
    month: "Jun",
    rate: 80
  }, {
    month: "Jul",
    rate: 82
  }, {
    month: "Aug",
    rate: 85
  }, {
    month: "Sep",
    rate: 86
  }, {
    month: "Oct",
    rate: 84
  }, {
    month: "Nov",
    rate: 87
  }, {
    month: "Dec",
    rate: 89
  }],
  studentEngagement: [{
    month: "Jan",
    engagement: 58
  }, {
    month: "Feb",
    engagement: 62
  }, {
    month: "Mar",
    engagement: 65
  }, {
    month: "Apr",
    engagement: 70
  }, {
    month: "May",
    engagement: 72
  }, {
    month: "Jun",
    engagement: 75
  }, {
    month: "Jul",
    engagement: 73
  }, {
    month: "Aug",
    engagement: 68
  }, {
    month: "Sep",
    engagement: 74
  }, {
    month: "Oct",
    engagement: 78
  }, {
    month: "Nov",
    engagement: 82
  }, {
    month: "Dec",
    engagement: 79
  }],
  courseDistribution: {
    labels: ["Computer Science", "Business", "Mathematics", "Engineering", "Arts & Humanities", "Other"],
    data: [32, 28, 24, 19, 15, 10]
  },
  studentPerformance: {
    labels: ["Excellent", "Good", "Average", "Below Average"],
    data: [486, 1245, 834, 300]
  }
};
export const recentActivities = [{
  id: 1,
  user: "Prof. Johnson",
  action: "created a new course",
  subject: "Advanced Statistics",
  time: "10 minutes ago"
}, {
  id: 2,
  user: "Admin",
  action: "approved",
  subject: "5 new course submissions",
  time: "45 minutes ago"
}, {
  id: 3,
  user: "System",
  action: "completed",
  subject: "daily backup",
  time: "2 hours ago"
}, {
  id: 4,
  user: "Prof. Williams",
  action: "graded",
  subject: "42 assignments",
  time: "3 hours ago"
}, {
  id: 5,
  user: "Admin",
  action: "updated",
  subject: "system settings",
  time: "5 hours ago"
}];