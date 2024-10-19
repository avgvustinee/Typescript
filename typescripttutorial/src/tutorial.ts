// Enumerated Type

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: "Please approve this request"
};

if(request.status === ApprovalStatus.approved) console.log("Send the email to the Augustine ")