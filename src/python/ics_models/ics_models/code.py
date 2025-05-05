from typing import Optional
from pydantic import BaseModel, StrictInt, StrictStr


class Code(BaseModel):
    id: StrictInt
    parameter: Optional[StrictStr] = None
